import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
// Message是弹框组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
