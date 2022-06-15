## Form 외부 Button 활성화 하기

> 기존 antd에서는 Form 안에서 Input과 Button을 통해서 submit이 가능하게 구현이 되어있다. <br/>
> 하지만 내가하고 있는 프로젝트에서 모달창을 통해서 제출하기 위해 footer에 커스텀한 Button을 만들어 주었다.

```js
const [form] = Form.useForm();

const handleOk = (values) => {
  console.log(values);
};

return (
  <Modal
    okText="save"
    title="Eidt User"
    visible={isEditModalVisible}
    footer={[
      <Button key="save" type="primary" htmlType="submit" onClick={() => form.submit()}>
        {" "}
        // form객체 안에 있는 submit()을 활용한다. Save
      </Button>,
    ]}
  >
    <Form name="basic" form={form} onFinish={handleOk}>
      {" "}
      // 기존의 Form의 api들 구조와 동일하다.
      <Form.Item hasFeedback name="email" label="email">
        <label>{curRecord.email}</label>
      </Form.Item>
      <Form.Item name="username" label="username">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="password" label="password">
        <Input type="password" placeholder="input placeholder" />
      </Form.Item>
    </Form>
  </Modal>
);
```

<br />

1. form 객체의 submit()함수를 Form 외부에 있는 버튼에 onClick으로 지정해준다. (htmlType={submit}까지 추가)
2. Form의 기존 api에서는 변경사항없이 onFinish에 작동하고자하는 함수를 기입한다.
3. `Save`버튼 클릭 시 Form의 Input에 삽입된 value들이 submit된다.

<br/>

## Form.Item 유효성 검사하기

> 패스워드의 입력기준을 9자 이상 문자 + 숫자 + 특수문자 포함으로 정하였다. <br/>
> Form.Item에 rules를 추가하여 validator를 추가할 수 있다.

```js
const passwordReg = useCallback((_, value) => {
  const regex = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;

  if (regex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error("패스워드는 숫자, 문자, 특수문자로 구성되어야합니다."));
}, []);

// ... 중략

<Form.Item
  hasFeedback
  name="new_password"
  label="new password"
  pattern="[A-Za-z]+" // 영어 외의 값이 입력될 경우 validate 안됨
  rules={[
    { min: 9 },
    {
      required: true,
      message: "Please input your new password.",
    },
    { validator: passwordReg },
  ]}
>
  <Input type="password" placeholder="input placeholder" />
</Form.Item>;
```

> useCallback 사용하여 함수가 패스워드가 입력된 경우에만 작동하도록 한다.

<br/>

##

> **Form** 을 사용하면서 선택한 유저의 상태별로 initialValues를 업데이트를 해주려고 한다.

```js
<Form layout="vertical" name="basic" form={form} onFinish={handleOk} initialValues={username: {userData}}> // 초기 렌더링이 될 때에 props로 전달받은 userData를 보여준다.
  <Form.Item name="username" label="Username">
    <Input placeholder="Please input username." />
  </Form.Item>

  <Form.Item name="date_birth" label="Date of birth">
    <DatePicker
      onChange={(_, date) => setSelectedDate(date)}
      style={{ width: "100%" }}
      disabled
      disabledDate={(current) => {
        return current && current > moment().endOf("day");
      }}
    />
  </Form.Item>

  <Form.Item
    name="username"
  >
    <Input placeholder="input username" />
  </Form.Item>

  //.. 중략

</Form>
```

> 하지만 다른 유저를 선택하여 setUserData로 업데이트된 상태가 props로 잘 전달 되었음에도 불구하고 상태가 변경되지 않았다.
> 한참동안 구글링해본 결과.. <br>
> 다음과 같이 antD의 Form 공식문서를 찾을 수 있었다. <br> `You cannot set value for each form control via value or defaultValue prop, you should set default value with initialValues of Form. Note that initialValues cannot be updated by setState dynamically, you should use setFieldsValue in that situation.` <br> `You shouldn't call setState manually, please use form.setFieldsValue to change value programmatically.` <br>
> 대충 내용을 보니 initialValues는 setState로 업데이트가 되지 않으니 form.setFieldValue로 변경시켜 주어야 한다고 한다. 따라서 아래와 같이 코드를 작성해 문제를 해결하였다.

```js

 useEffect(() => {
    form.setFieldsValue(userData);
  }, [userData, form]);

//..중략

<Form layout="vertical" name="basic" form={form} onFinish={handleOk} initialValues={username: {userData}}> // 초기 렌더링이 될 때에 props로 전달받은 userData를 보여준다.
  <Form.Item name="username" label="Username">
    <Input placeholder="Please input username." />
  </Form.Item>

  <Form.Item name="date_birth" label="Date of birth">
    <DatePicker
      onChange={(_, date) => setSelectedDate(date)}
      style={{ width: "100%" }}
      disabled
      disabledDate={(current) => {
        return current && current > moment().endOf("day");
      }}
    />
  </Form.Item>

  <Form.Item
    name="username"
  >
    <Input placeholder="input username" />
  </Form.Item>

  //.. 중략

</Form>
```

<br>

[README.md로 이동하기](../../README.md)
