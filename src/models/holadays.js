import db from '../utils/db'

export const getHoladays = async (skip, take) => {
  const count = await db.holaday.count()
  const holadays = await db.holaday.findMany({
    skip,
    take,
  })
  return { count, holadays }
}

export const getHoladay = async (id) =>
  db.holaday.findUnique({ where: { holadayId: id } })

export const addHoladay = async (holadayData) =>
  db.holaday.create({ data: { ...holadayData } })

export const updateHoladay = async (id, holadayData) => {
  const holaday = await getHoladay(id)
  if (holaday) {
    return db.holaday.update({
      where: { holadayIdId: id },
      data: { ...holaday, ...holadayData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteHoladay = async (id) =>
  db.holaday.delete({ where: { holadayId: id } })
