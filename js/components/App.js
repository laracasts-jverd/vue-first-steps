import Assignments from "./Assignments.js";
import Card from "./Card.js";

export default {
  components: { Assignments, Card },

  template: `
        <div class="grid gap-6">
          <assignments></assignments>

          <card>
            <template #heading>
              Welcome to Vue.js Slots
            </template>
            <template #default>
              This is a my default content.
            </template>
            <template #footer>
              This is a my footer.
            </template>
          </card>

          <card theme="light">
            <template #heading>
              Welcome to Vue.js Slots
            </template>
            <template #default>
              This is a my default content.
            </template>
            <template #footer>
              This is a footer.
            </template>
          </card>

        </div>
    `,
}
