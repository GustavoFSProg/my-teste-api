import userModelista from '../models/userModel'
import md5 from 'md5'
import { Request, Response } from 'express'

async function register(req: Request, res: Response) {
  try {
    await userModelista.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password),
    })

    return res.status(201).send({ msg: 'Cadastrado!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Erro!!' })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await userModelista.find()

    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({ erro: 'error', error })
  }
}

async function update(req: Request, res: Response) {
  try {
    await userModelista.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
    })

    return res.status(200).json({ msg: 'Tudo editado!!' })
  } catch (error) {
    return res.status(400).json({ erro: 'error', error })
  }
}

async function deletar(req: Request, res: Response) {
  try {
    await userModelista.findByIdAndRemove(req.params.id)

    return res.status(200).json({ msg: 'Tudo deletado!!' })
  } catch (error) {
    return res.status(400).json({ erro: 'error', error })
  }
}

async function getById(req: Request, res: Response) {
  try {
    const data = await userModelista.findById(req.params.id, 'email name')

    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({ erro: 'error', error })
  }
}

async function getByName(req: Request, res: Response) {
  try {
    const data = await userModelista.findOne({ name: req.params.name }, 'email name')

    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({ erro: 'error', error })
  }
}

export default { register, getAll, update, deletar, getById, getByName }
