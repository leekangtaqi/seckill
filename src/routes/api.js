import userApi from './user-api'
import rankApi from './rank-api'
import mount, { Router } from '../framework/route-mounter'
import { logger } from '../middlewares'
import context from '../app/context'

export default function Api(router) {

  router.use(logger)

  mount('/user', userApi)(router)

  mount('/rank', rankApi)(router)

  return router 
}