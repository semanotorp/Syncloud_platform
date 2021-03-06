#!/opt/app/platform/python/bin/python
from syncloud_platform.application import api
import os
from syncloudlib import logger

log = logger.get_logger('test_hook')

try:

    app = api.get_app_setup('platform')
    storage_dir = os.path.realpath(app.init_storage(None))

    with open('/tmp/on_disk_change.log', 'w+') as f:
        f.write(storage_dir)
except Exception, e:
    log.error('error {0}'.format(str(e)))
