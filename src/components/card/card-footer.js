import { mergeData, prefixPropName, copyProps } from '../../utils'
import { assign } from '../../utils/object'
import { cardMixin } from '../../mixins'

export const props = assign({}, copyProps(cardMixin.props, prefixPropName.bind(null, 'footer')), {
  footer: {
    type: String,
    default: null
  },
  footerClass: {
    type: [String, Object, Array],
    default: null
  }
})

export default {
  functional: true,
  props,
  render (h, { props, data, slots }) {
    return h(
      props.footerTag,
      mergeData(data, {
        staticClass: 'card-footer',
        class: [
          props.footerClass,
          {
            [`bg-${props.footerBgVariant}`]: Boolean(props.footerBgVariant),
            [`border-${props.footerBorderVariant}`]: Boolean(props.footerBorderVariant),
            [`text-${props.footerTextVariant}`]: Boolean(props.footerTextVariant)
          }
        ]
      }),
      slots().default || [h('div', { domProps: { innerHTML: props.footer } })]
    )
  }
}
