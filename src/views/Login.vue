<template>
    <div>
        <img src="../assets/1.png" alt="" />
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: '',
                password: ''
            },
            schema: {
                fields: [
                    {
                        type: 'input',
                        modelKey: 'username',
                        label: '用户名',
                        props: {
                            placeholder: '请输入用户名',
                        },
                        rules: {
                            required: true,
                            type: 'string',
                            min: 3,
                            max: 15,
                        },
                        trigger: 'blur',
                        messages: {
                            required: '用户名不能为空',
                            min: '用户名不能少于3个字符',
                            max: '用户名不能大于15个字符'
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'password',
                        label: '密码',
                        props: {
                            placeholder: '请输入密码',
                            type: 'password',
                            eye: {
                                open: false
                            }
                        },
                        rules: {
                            required: true,
                        },
                        trigger: 'blur'
                    },
                    {
                        type: 'submit',
                        label: '登录'
                    }
                ]
            }
        }
    },
    methods: {
        async submitHandler(e) {
            e.preventDefault()
            try {
                const result = await this.$http.get('/api/login',{params: this.model})
                if(result.data.code=='0') {
                    this.$store.commit('settoken',result.data.token)
                    window.localStorage.setItem('token',result.data.token)
                }else {
                    alert(result.data.message)
                }
            } catch (error) {
                console.log(err)
            }
        }
    },
    mounted() {
        
    }
}
</script>

<style lang='stylus' scoped>
    img {
        width: 100%;
        height: 150px;
    }
</style>