export default class AuthController {
  public async login({ request, auth, response }) {
    let { email, password } = request.all()
    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '60 min',
      })
      return token.toJSON()
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }
}
