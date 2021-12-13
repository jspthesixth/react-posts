import { useEffect, ComponentType } from 'react'
import { propsMessage } from '../shared/message'

type InjectedProps = {
  propsMessage: string
}

export function withInjectedProps<TProps>(
  WrappedComponent: ComponentType<TProps & InjectedProps>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const ComponentWithInjectedProps = (
    props: Omit<TProps, keyof InjectedProps>
  ) => {
    useEffect(() => {
      console.log(`${propsMessage} ${displayName}`)
    }, [])

    return (
      <WrappedComponent {...(props as TProps)} propsMessage={propsMessage} />
    )
  }

  return ComponentWithInjectedProps
}
