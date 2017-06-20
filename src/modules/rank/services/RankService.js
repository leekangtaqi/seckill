export default class UserService {
  constructor (context) {
    this.context = context;
  }

  async create (data) {
    let Rank = this.context.models.Rank
    let rank = new Rank(data)
    await rank.save()
    return rank
  }

  async findById (id) {
    let Rank = this.context.models.Rank
    let rank = await Rank
      .findById(id)
      .exec()
    return await Rank.count({ spendTime: { $lt: rank.spendTime } }).exec() + 1
  }

  async find () {
    let Rank = this.context.models.Rank
    return await Rank
      .find()
      .sort({ spendTime: 1 })
      .limit(10)
      .exec()
  }

}