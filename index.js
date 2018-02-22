function getFirstSelector(elm) {
  let element = document.querySelector(elm);

  return element
}


function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  let l = rankedLists.length
  for (let i = 0; i < l; i ++) {
    let children = rankedLists[i].children


    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }

}
