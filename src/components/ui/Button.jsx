import styles from './Button.module.css'

function Button({ children, variant = 'primary', as = 'button', className = '', ...props }) {
  const Component = as
  return (
    <Component className={`${styles.button} ${styles[variant]} ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}

export default Button
