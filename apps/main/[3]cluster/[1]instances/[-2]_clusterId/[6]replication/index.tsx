/*
 * Copyright 2022 PingCAP
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FC } from 'react'
import { Empty } from 'antd'
import { useI18n } from '@i18n-macro'
import { useClusterContext } from '../context'
import ReplicationTable from './components/ReplicationTable'

const Index: FC = () => {
  const { info, topology } = useClusterContext()

  const disabled = !topology?.find((item) => item.type === 'CDC')
  const { t } = useI18n()

  if (disabled) {
    return <Empty description={t('disabled.desc')} />
  }

  return <ReplicationTable cluster={info!} />
}

export default Index
