import Nerv, { Component } from 'nervjs'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount() {
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide() { }
  
  captchaSuccess(result){
    console.log('captcha-Success!',result)

  }
  captchaClose() {
    console.log('captchaClose')
  }
  captchaReady=()=> {
    console.log('captchaReady')
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <captcha4 captchaId='83ee748676c09d077c5c83e3b8a08e32' onReady={this.captchaReady}  onClose={this.captchaClose} onSuccess={this.captchaSuccess}></captcha4>
      </View>
    )
  }
}
