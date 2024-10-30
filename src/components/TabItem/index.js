import './index.css'

const TabItem = props => {
  const {each, onChangeOfCategoryTab, isActive} = props
  const {tabId, displayText} = each
  const onChangeTab = () => {
    onChangeOfCategoryTab(tabId)
  }
  const selectedTab = isActive ? 'selected-tab' : 'tab-btn'
  return (
    <li>
      <button className={selectedTab} onClick={onChangeTab} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
