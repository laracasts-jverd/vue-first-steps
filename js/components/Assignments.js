import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
      <section class="flex gap-8">
          <assignment-list
            :assignments="filters.inProgress"
            title="In Progress"
          >
            <assignment-create @add="add"/>
          </assignment-list>
          <div v-show="showCompleted">
            <assignment-list
              :assignments="filters.completed"
              title="Completed"
              can-toggle
              @toggle="showCompleted = !showCompleted"
            />
          </div>
      </section>
  `,
  async created() {
    const response = await fetch('http://localhost:3001/assignments');
    this.assignments = await response.json();
  },
  data() {
    return {
      assignments: [],
      showCompleted: true,
    }
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete)
      };
    },
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1
      });
    }
  }
}
