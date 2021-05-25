import React from 'react'
import ReactDOM from 'react-dom'
import ScrollSnap from 'scroll-snap'
import './styles.css'

function callback() {
  console.log('snapped')
}

class App extends React.Component {
  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '90%',
    })

    snapElement.bind(callback)
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
    return (
      <div id="container" ref={this.container}>
        <div className="page first-page">
          <div>I</div>
          <div className="hint">scroll down</div>
        </div>
        <div className="page second-page">
          <div>II</div>
        </div>
        <div className="page third-page">
          <div>III</div>
        </div>
        <div className="page fourth-page">
          <div>IV</div>
          <div className="hint">scroll up</div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
