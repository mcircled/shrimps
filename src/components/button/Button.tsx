import React from 'react'

type Props = {
 title: string,
 url: string,
 type: "primary" | "secondary" | "small" | "large" | "slugift",
 target: "_blank" | ""
}

function Button({ title, type, url, target }: Props) {

 return (
  <a className={`c-button c-button--${title} c-button--${type}`} href={url} target={target} >
   {title}
  </a>
 )

}

export default Button
