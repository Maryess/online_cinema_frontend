import * as userActions from './user/user.action'
import * as adminActions from './admin/admin.action'

export const allActions = {
	...userActions,
	...adminActions
}
