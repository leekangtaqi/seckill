export default class UserService {
  constructor(context){
    this.context = context;
  }

  async create(userMeta){
    let User = this.context.models.User
    let user = new User(userMeta)
    await user.save()
    return user

  }

  async find(){
    let User = this.context.models.User

    await Company.sync({force: true})
    await User.sync({force: true})
    await User.create({ firstName: '2222', companyId: id})
    return await User.findOne()
    // return await User.find().exec()
  }
}