import { ReactNode } from 'react'
import { loadI18n } from '@i18n-macro'
import { RequestClusterCreate } from '@/api/model'
import { FormInstance } from '@ant-design/pro-form'

loadI18n()

export interface StandardFormProps {
  form: FormInstance

  additionalOptions?: ReactNode
  formClassName?: string

  onSubmit: (data: RequestClusterCreate) => void
  footerClassName?: string
}

export function StandardForm(_: StandardFormProps) {
  return <>Not Implemented Yet {JSON.stringify(_)}</>
  // const knowledgeMap = useKnowledgeMap()
  //
  // const availableStocksMap = useAvailableStocks()
  //
  // const [clusterType, setClusterType] = useState<string>()
  // const [clusterVersion, setClusterVersion] = useState<string>()
  //
  // const setDefaultTypeAndVersion = useCallback(
  //   (clusterType?: string) => {
  //     const defaultClusterType = clusterType || knowledgeMap.types[0]?.code
  //     if (defaultClusterType) {
  //       setClusterType(defaultClusterType)
  //       const defaultVersion =
  //         knowledgeMap.map[defaultClusterType].versions[0].code
  //       setClusterVersion(defaultVersion)
  //       form.setFields([
  //         {
  //           name: 'clusterVersion',
  //           value: defaultVersion,
  //         },
  //       ])
  //     }
  //   },
  //   [knowledgeMap, form]
  // )
  //
  // useEffect(() => {
  //   setDefaultTypeAndVersion()
  // }, [setDefaultTypeAndVersion])
  //
  // const { t, i18n } = useI18n()
  //
  // const basicOptions = useMemo(
  //   () =>
  //     !!clusterType &&
  //     !!clusterVersion && (
  //       <BasicOptions
  //         t={t}
  //         onSelectType={setDefaultTypeAndVersion}
  //         onSelectVersion={(key) => setClusterVersion(key)}
  //         type={clusterType}
  //         version={clusterVersion}
  //         knowledgeMap={knowledgeMap}
  //       />
  //     ),
  //   [
  //     clusterType,
  //     clusterVersion,
  //     setClusterType,
  //     setClusterVersion,
  //     knowledgeMap,
  //     i18n.language,
  //   ]
  // )
  //
  // const nodeOptions = useMemo(
  //   () =>
  //     knowledgeMap.map?.[clusterType!]?.map?.[clusterVersion!]?.map(
  //       (spec, idx) => (
  //         <NodeOptions
  //           t={t}
  //           key={spec.clusterComponent!.componentType!}
  //           idx={idx}
  //           spec={spec}
  //           availableStocksMap={availableStocksMap}
  //           form={form}
  //         />
  //       )
  //     ),
  //   [
  //     clusterType,
  //     clusterVersion,
  //     form,
  //     availableStocksMap,
  //     knowledgeMap,
  //     i18n.language,
  //   ]
  // )
  //
  // const onReset = useCallback(() => {
  //   form.resetFields()
  //   setDefaultTypeAndVersion()
  // }, [form, setDefaultTypeAndVersion])
  //
  // return (
  //   <>
  //     <Form
  //       layout="horizontal"
  //       hideRequiredMark
  //       labelCol={{
  //         span: 5,
  //       }}
  //       colon={false}
  //       form={form}
  //       name="create"
  //       className={`${styles.form} ${styles.withBoldTitle} ${
  //         formClassName || ''
  //       }`}
  //     >
  //       <Row>
  //         <Col span={10}>
  //           {basicOptions}
  //           {additionalOptions}
  //         </Col>
  //         <Col span={11} offset={2}>
  //           {nodeOptions}
  //         </Col>
  //       </Row>
  //     </Form>
  //     <CreateClusterSubmitter
  //       onSubmit={onSubmit}
  //       onReset={onReset}
  //       form={form}
  //       wrapperClassName={footerClassName}
  //     />
  //   </>
  // )
}
//
// function BasicOptions({
//   t,
//   onSelectType,
//   onSelectVersion,
//   type,
//   version,
//   knowledgeMap,
// }: {
//   t: TFunction<''>
//   onSelectType: (type: string) => void
//   onSelectVersion: (version: string) => void
//   type: string
//   version: string
//   knowledgeMap: KnowledgeMap
// }) {
//   return (
//     <Card title={t('basic.title')}>
//       <Form.Item
//         name="clusterName"
//         label={t('basic.fields.name')}
//         tooltip={t('basic.tooltip.name')}
//         rules={[
//           { required: true, message: t('basic.rules.name.require') },
//           { min: 8, max: 32, message: t('basic.rules.name.length') },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="tags"
//         label={t('basic.fields.tags')}
//         tooltip={t('basic.tooltip.tags')}
//         initialValue={[]}
//       >
//         <Select
//           mode="tags"
//           tokenSeparators={[',', ' ']}
//           dropdownStyle={{ display: 'none' }}
//         />
//       </Form.Item>
//       <Form.Item
//         name="dbPassword"
//         label={t('basic.fields.password')}
//         tooltip={t('basic.tooltip.password')}
//         rules={[
//           { required: true, message: t('basic.rules.password.require') },
//           { min: 8, max: 32, message: t('basic.rules.password.length') },
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>
//       <Form.Item label={t('basic.fields.type')}>
//         <Input.Group compact>
//           <Form.Item
//             name="clusterType"
//             noStyle
//             rules={[{ required: true, message: t('basic.rules.type.require') }]}
//             initialValue={type}
//           >
//             <Select onSelect={(key) => onSelectType(key as any)}>
//               {knowledgeMap.types.map((t) => (
//                 <Select.Option value={t.code!} key={t.code!}>
//                   {t.name!}
//                 </Select.Option>
//               ))}
//             </Select>
//           </Form.Item>
//           <Form.Item
//             name="clusterVersion"
//             noStyle
//             rules={[
//               { required: true, message: t('basic.rules.version.require') },
//             ]}
//             initialValue={version}
//           >
//             <Select onSelect={(key) => onSelectVersion(key as string)}>
//               {!!type &&
//                 knowledgeMap.map[type].versions.map((v) => (
//                   <Select.Option value={v.code!} key={v.code!}>
//                     {v.name!}
//                   </Select.Option>
//                 ))}
//             </Select>
//           </Form.Item>
//         </Input.Group>
//       </Form.Item>
//       {/* TODO: wait for TLS support */}
//       {/* <Form.Item
//         name="tls"
//         label={t('basic.fields.tls')}
//         valuePropName="checked"
//         initialValue={false}
//       >
//         <Switch />
//       </Form.Item> */}
//     </Card>
//   )
// }
//
// function NodeOptions({
//   t,
//   spec,
//   idx,
//   availableStocksMap,
//   form,
// }: {
//   t: TFunction<''>
//   spec: KnowledgeOfClusterComponent
//   idx: number
//   availableStocksMap: AvailableStocksMap
//   form: FormInstance
// }) {
//   const componentName = spec.clusterComponent!.componentName!
//   const componentType = spec.clusterComponent!.componentType!
//   const suggestedNodeQuantities =
//     spec.componentConstraint!.suggestedNodeQuantities
//   const specCodes = spec.componentConstraint!.availableSpecCodes!
//
//   return (
//     <Card
//       title={t('nodes.title', { name: componentName })}
//       extra={
//         <Dropdown
//           disabled={!suggestedNodeQuantities?.length}
//           overlay={
//             <Menu
//               onClick={(e) => {
//                 form.setFields(
//                   allocateNodes(
//                     Number.parseInt(e.key),
//                     availableStocksMap.zones.length
//                   ).map((count, i) => ({
//                     name: [
//                       'nodeDemandList',
//                       idx,
//                       'distributionItems',
//                       i,
//                       'count',
//                     ],
//                     value: count,
//                   }))
//                 )
//               }}
//             >
//               {suggestedNodeQuantities?.map((q) => (
//                 <Menu.Item key={q}>
//                   {t('nodes.allocator.items', { count: q })}
//                 </Menu.Item>
//               ))}
//             </Menu>
//           }
//         >
//           <Button>
//             {t('nodes.allocator.title')} <DownOutlined />
//           </Button>
//         </Dropdown>
//       }
//     >
//       <Form.Item
//         name={['nodeDemandList', idx, 'componentType']}
//         hidden
//         initialValue={componentType}
//       >
//         <Input />
//       </Form.Item>
//       <Row
//         gutter={20}
//         style={{
//           lineHeight: '12px',
//           fontSize: 16,
//         }}
//       >
//         <Col span={8}>{t('nodes.fields.zone')}</Col>
//         <Col span={10}>{t('nodes.fields.spec')}</Col>
//         <Col span={6}>{t('nodes.fields.amount')}</Col>
//       </Row>
//       <Divider style={{ margin: '16px 0' }} />
//       {availableStocksMap.zones.map((zoneCode, i) => {
//         const zone = availableStocksMap.map[zoneCode]
//         // ignore spec matching after sprint 2.
//         // const specs = specCodes
//         if (specCodes.length === 0) return undefined
//         return (
//           <Row key={i} gutter={20}>
//             <Col span={8}>
//               <Form.Item
//                 name={[
//                   'nodeDemandList',
//                   idx,
//                   'distributionItems',
//                   i,
//                   'zoneCode',
//                 ]}
//                 initialValue={zoneCode}
//                 hidden
//               >
//                 <Input />
//               </Form.Item>
//               <div className={styles.zoneName}>{zone.zoneName}</div>
//             </Col>
//             <Col span={10}>
//               <Form.Item
//                 name={[
//                   'nodeDemandList',
//                   idx,
//                   'distributionItems',
//                   i,
//                   'specCode',
//                 ]}
//                 initialValue={specCodes[0]}
//               >
//                 <Select>
//                   {specCodes.map((spec) => (
//                     <Select.Option key={spec} value={spec}>
//                       {spec}
//                     </Select.Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={6}>
//               <Form.Item
//                 name={['nodeDemandList', idx, 'distributionItems', i, 'count']}
//                 initialValue={1}
//               >
//                 <InputNumber
//                   min={0}
//                   // TODO: add max limit
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//         )
//       })}
//     </Card>
//   )
// }
//
// interface CreateClusterSubmitterProps {
//   form: FormInstance
//   onSubmit: (data: RequestClusterCreate) => void
//   onReset: () => void
//   wrapperClassName?: string
// }
//
// function CreateClusterSubmitter({
//   form,
//   onSubmit,
//   onReset,
//   wrapperClassName,
//   children,
// }: PropsWithChildren<CreateClusterSubmitterProps>) {
//   const { t, i18n } = useI18n()
//   const knowledgeMap = useKnowledgeMap()
//
//   const handleSubmit = useCallback(
//     (value: RequestClusterCreate) => {
//       {
//         // normalize
//         value.nodeDemandList?.forEach((comp) => {
//           // remove count=0
//           comp.distributionItems = comp.distributionItems!.filter(
//             (item) => item && item.count! > 0
//           )
//           // calculate totalCount
//           comp.totalNodeCount = comp.distributionItems!.reduce(
//             (count, item) => count + item.count!,
//             0
//           )
//         })
//       }
//       {
//         // validate
//         const specs =
//           knowledgeMap!.map[value.clusterType!].map![value.clusterVersion!]
//         for (const spec of specs) {
//           const node = value.nodeDemandList!.find(
//             (n) => n.componentType === spec.clusterComponent!.componentType
//           )!
//           const required = spec.componentConstraint!.componentRequired
//           const minZone = spec.componentConstraint!.minZoneQuantity
//           // check exist if required
//           if (required) {
//             if (node.totalNodeCount! === 0) {
//               message.error(
//                 t('create.validation.miss', {
//                   name: spec.clusterComponent!.componentName,
//                 })
//               )
//               return Promise.reject()
//             }
//           }
//           // check min zone quantity
//           if (minZone) {
//             if (node.distributionItems!.length! < minZone) {
//               message.error(
//                 t('create.validation.zone', {
//                   name: spec.clusterComponent!.componentName,
//                   count: minZone,
//                 })
//               )
//               return Promise.reject()
//             }
//           }
//         }
//       }
//       onSubmit(value)
//     },
//     [knowledgeMap, i18n.language]
//   )
//
//   const onConfirm = async () => {
//     try {
//       const fields = await form.validateFields()
//       await handleSubmit(fields)
//     } catch (e) {
//       // TODO: show err message
//     }
//   }
//
//   return (
//     <div className={`${styles.buttons} ${wrapperClassName || ''}`}>
//       {children}
//       <IntlPopConfirm title={t('footer.reset.confirm')} onConfirm={onReset}>
//         <Button size="large">{t('footer.reset.title')}</Button>
//       </IntlPopConfirm>
//       <IntlPopConfirm title={t('footer.submit.confirm')} onConfirm={onConfirm}>
//         <Button size="large" type="primary">
//           {t('footer.submit.title')}
//         </Button>
//       </IntlPopConfirm>
//     </div>
//   )
// }