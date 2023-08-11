//定义返回信息的基本数据类型
export interface ResponseDataType {
  code: number
  msg: string
}

//个人信息返回数据类型
export interface userProfileInfoType {
  card_number: string
  card_type: string
  email: string
  name: string
  nickname: string
  phone_number: string
  photo: string
  sex: string
}
//继承
export interface userProfileInfoType extends ResponseDataType {
  profileInfo: userProfileInfoType
}
