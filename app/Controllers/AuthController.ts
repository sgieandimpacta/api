export default class AuthController {
  public async login({ request, auth, response }) {
    let { email, password } = request.all()
    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }
}
