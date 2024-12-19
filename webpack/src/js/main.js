import Alert from 'bootstrap/js/dist/alert'

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap'

import { DateTime } from 'luxon';

	setInterval(() => {
	hh.textContent = DateTime
	.local()
	.setLocale('ru')
	.toFormat('dd.LL.y HH:mm:ss');
}, 1000);