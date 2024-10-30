import './index.css'

const AppItem = props => {
  const {each} = props
  const {appName, imageUrl} = each
  return (
    <li className="app-item-container">
      <img className="app-item-image" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
