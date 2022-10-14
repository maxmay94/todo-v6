import { Router } from 'express'
import * as todoCtrl from '../controllers/todos.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'