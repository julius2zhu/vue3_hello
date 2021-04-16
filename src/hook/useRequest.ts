/**
 * 封装发送ajax请求
 */
import {ref} from 'vue'
import axios from "axios";

/**
 * 封装ajax请求函数
 * @param url 请求地址
 * @param method 请求方式
 */
export default function <T>(url: string, method: string) {

    //正在请求
    const loading = ref(true)
    //数据
    const data = ref<T | null>(null)
    //错误信息
    const msg = ref('')
    //发送请求
    const _method = method.toLowerCase()
    if (_method === 'GET') {
        axios.get(url, {
            params: {}
        }).then(resp => {
            loading.value = false
            data.value = resp.data
        }).catch(error => {
            loading.value = false
            msg.value = error
        })
    } else if (_method === 'POST') {
        axios.post(url, {
            data: {}
        })
    }
    return {
        loading, data, msg
    }
}