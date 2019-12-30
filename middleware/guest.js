export default function ({ store, redirect }) {
    // If the user is authenticated redirect to home page
    if (store.state.auth.token && store.state.auth.user.user_type == 'admin') {
        return redirect('/admin/dashboard')
    }
}
