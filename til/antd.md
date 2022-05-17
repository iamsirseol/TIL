## Form 외부 Button 활성화 하기
> 기존 antd에서는 Form 안에서 Input과 Button을 통해서 submit이 가능하게 구현이 되어있다. <br/>
> 하지만 내가하고 있는 프로젝트에서 모달창을 통해서 제출하기 위해 footer에 커스텀한 Button을 만들어 주었다.
> 
```js
const [form] = Form.useForm();

const handleOk = (values) => {
  console.log(values);
}

return (
  <Modal
    okText="save"
    title="Eidt User"
    visible={isEditModalVisible}
    footer={[
      <Button key="save" type="primary" htmlType="submit" onClick={() => form.submit()}> // form객체 안에 있는 submit()을 활용한다.
        Save
      </Button>,
    ]}
  >
      <Form name="basic" form={form} onFinish={handleOk}> // 기존의 Form의 api들 구조와 동일하다.
        <Form.Item hasFeedback name="email" label="email">
          <label>{curRecord.email}</label>
        </Form.Item>

        <Form.Item
          name="username"
          label="username"
        >
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item
          name="password"
          label="password"
        >
          <Input type="password" placeholder="input placeholder" />
        </Form.Item>
      </Form>
  </Modal>
)
```
<br />

1. form 객체의 submit()함수를 Form 외부에 있는 버튼에 onClick으로 지정해준다. (htmlType={submit}까지 추가)
2. Form의 기존 api에서는 변경사항없이 onFinish에 작동하고자하는 함수를 기입한다.
3. `Save`버튼 클릭 시 Form의 Input에 삽입된 value들이 submit된다.


[README.md로 이동하기](../README.md)
