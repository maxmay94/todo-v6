import { Router } from 'express'
import * as todoCtrl from '../controllers/todos.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/* ------------------------- Public Routes ------------------------- */


/* ------------------------- Private Routes ------------------------- */