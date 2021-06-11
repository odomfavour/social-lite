export default ({app, error, redirect}) => {
    const hasToken = !!app.$apolloHelpers.getToken()
    if (!hasToken) {
    //  this.$router.push('/home')
    return redirect('/login')
      error({
        errorCode:503,
        message:'You are not allowed to see this'
      })
    }
  }
  