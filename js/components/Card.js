export default {
  template: `
    <div
      :class="{
        'border rounded-lg': true,
        'bg-gray-700 p-4 border-gray-600 text-white': theme === 'dark',
        'bg-gray-100 p-4 border-gray-300 text-black': theme === 'light'
      }"
    >

      <h2 v-if="$slots.heading" class="font-bold mb-2">
        <slot name="heading"/>
      </h2>

      <slot/>

      <footer v-if="$slots.footer" class="border-t mt-4 pt-4 border-gray-600">
        <slot name="footer"/>
      </footer>

    </div>
  `,
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  }
}
