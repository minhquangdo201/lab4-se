import './index.css'
const LoginPage = () => {
    return (
        <div className='form-outer'>
            <div className="login-form">
                <h2>Đăng nhập</h2>
                <div className='form-input'>
                    <label>Tài khoản</label>
                    <input type="text" />
                </div>
                <div className='form-input'>
                    <label>Mật khẩu</label>
                    <input type="password" />
                </div>
                <button>Đăng nhập</button>
            </div>
        </div>
    )
}

export default LoginPage;