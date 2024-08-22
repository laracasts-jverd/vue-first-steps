export default {
  template: `
      <li>
          <label class="px-2 flex justify-between items-center">
              {{ assignment.name }}
              <input type="checkbox" v-model="assignment.complete" class="ml-3">
          </label>
      </li>
  `,

  props: {
    assignment: Object
  }
}
