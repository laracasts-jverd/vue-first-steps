import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Card from "./Card.js";

export default {
  components: { Assignment, AssignmentTags, Card },

  template: `
        <card v-show="assignments.length" class="w-120">
          <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
              {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
          </div>

          <assignment-tags
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
          />

          <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <assignment
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            />
          </ul>
          <slot/>
          <template #footer>
            Footer
          </template>
        </card>
    `,
  props: {
    assignments: Array,
    title: String,
    canToggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentTag: 'all',
    };
  },
  computed: {
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      }
      return this.assignments.filter(assignment => assignment.tag === this.currentTag);
    },
  }
}
