import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
// import User from '#models/user'

export default class Test extends BaseCommand {
  static commandName = 'test:command'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    const { default: User } = await import('#models/user');
    const user = await User.query().where('email', 'test@example.com')
    console.log(user)
  }
}
