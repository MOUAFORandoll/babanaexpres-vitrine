interface Menu{
  name: string,
  link: string,
}

export default function FooterItem({Links=Array<Menu>(), title=String()}) {
  return (
    <ul>
        <h1 className='mb-1 font-semibold'>{title}</h1>
        {Links.map((menu, index) => (
          <li key={index}>
            <a className="text-sm leading-6 text-gray-400 duration-300 cursor-pointer hover:text-teal-400" href={menu.link}>{menu.name}</a>
          </li>
        ))}
    </ul>
  )
}
