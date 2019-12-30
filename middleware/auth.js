export default function ({ store, redirect }) {
    if (store.state.auth.token == '' || typeof store.state.auth.token == 'undefined' || store.state.auth.user.user_type != 'admin') {
        return redirect('/login')
    }
}
