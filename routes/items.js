const items = require('../Items')

function itemRoutes (fastify, options, done){

  const getItemsOpts = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
            // id: {type: 'string'},
              name: {type: 'string'}
            }
          }
        }
      }
    }
  }

  // Get all items
  fastify.get('/items', getItemsOpts, (req, reply) => {
    reply.send(items)
  })

  // Get single item
  fastify.get('/items/:id', (req, reply) => {
    const {id} = req.params
    const item = items.find(item =>
      item.id === id)
    reply.send(item)
  })

  done()
}

module.exports = itemRoutes
