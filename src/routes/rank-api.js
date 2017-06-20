import context from '../app/context'

export default function UserApiRouter(router){
  let { rankController }  = context.controllers

  router.post('/', rankController.create)
  router.get('/', rankController.find)
  router.get('/:id', rankController.findById)

  return router
}