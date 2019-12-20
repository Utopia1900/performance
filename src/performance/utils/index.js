// 将mockData数据转化为注入到iView tree组件所需要的数据格式：
export const formatTreeData = (items, title = 'name', parentId = 'pId') => {
  let map = {}
  let roots = []
  let node
  for (let i = 0; i < items.length; i++) {
    map[items[i].id] = i
    items[i].children = []
  }

  for (let i = 0; i < items.length; i++) {
    node = items[i]
    node.title = node[title] + '(' + items[i].properties.total + '分)'
    node.checked = true // checked: iView ztree组件属性
    // node.expand = true // expand: iView ztree组件属性
    node.open = true
    let pId = parentId ? node[parentId] : node.pId
    if (items[map[pId]]) {
      items[map[pId]].children.push(node)
    } else {
      roots.push(node)
    }
  }
  return roots
}
