import { Router } from 'express'

import {
  getHoladay,
  getHoladays,
  addHoladay,
  updateHoladay,
  deleteHoladay,
} from '../../models/holadays'

const router = Router()

router.get('/', async (req, res) => {
  const size = Number(req.query.size) || 10
  const page = Number(req.query.page) || 1
  const skip = size * (page - 1)
  const take = size
  const { count, holadays } = await getHoladays(skip, take)
  res.set({
    'X-Total-Count': count,
    'X-Total-Pages': Math.ceil(count / size),
  })
  res.send(holadays)
})

router.get('/:id', async (req, res) => {
  const holaday = await getHoladay(req.params.id)
  if (holaday) {
    res.send(holaday)
  } else {
    res.status(404).send({ msg: 'Holaday not found' })
  }
})

router.post('/', async (req, res) => {
  const holaday = await addHoladay(req.body)
  res.send(holaday)
})

router.put('/:id', async (req, res) => {
  const holaday = await updateHoladay(req.params.id, req.body)
  if (holaday) {
    res.send(holaday)
  } else {
    res.status(404).send({ msg: 'Holaday not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const holaday = await deleteHoladay(req.params.id)
  if (holaday) {
    res.send(holaday)
  } else {
    res.status(404).send({ msg: 'Holaday not found' })
  }
})

export default router
