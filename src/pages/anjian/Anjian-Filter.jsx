import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row, Select, Space} from "antd";
import {useForm} from "antd/es/form/Form";
import {batch} from "react-redux";

function AnjianFilter(props) {
    const {searchParam,setSearchParam,page,setPage}=props;
    const [form]=useForm();
    const onFinish=(values)=>{
            batch(()=>{
                setPage({...page,...{pageNo:1}})
                setSearchParam(values);
            })


    }
    const onReset=()=>{
        form.resetFields();
        batch(()=>{
            setPage({...page,...{pageNo:1}})
            setSearchParam({});
        })
    }
    useEffect(()=>{
        form.setFieldsValue(searchParam)
    },[])

    const [statusList,setStatusList]=useState([
        {text: 1, value: '未处理'},
        {text: 2, value: '已提交'},
        {text: 3, value: '结束'},
    ]);
    const [ajList,setAjList]=useState([
        {text: 1, value: '刑事案件'},
        {text: 2, value: '民事案件'},
        {text: 3, value: '交通案件'},
    ]);
    return (
        <div>
            <Row style={{backgroundColor:'#fff'}}>
                <Col   span={18}>
                    <Form id={"searchArea"} layout={'inline'} form={form} onFinish={onFinish}>
                        <Form.Item label={'案件名称'} name="ajName">
                            <Input placeholder={"请输入案件名称"}/>
                        </Form.Item>
                        <Form.Item label={'案件简介'} name="ajDesc">
                            <Input placeholder={"请输入案件简介"}/>
                        </Form.Item>
                        <Form.Item label={'案件类型'}  name="ajType">
                            <Select style={{ width: 120 }}>
                                {
                                    ajList.map((item,index)=>{
                                        return <Select.Option key={index} value={item.text}>{item.value}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label={'案件状态'}  name="status">
                            <Select style={{ width: 120 }}>
                                {
                                    statusList.map((item,index)=>{
                                        return <Select.Option key={index} value={item.text}>{item.value}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item >
                            <Space>
                                <Button type="primary" htmlType="submit" >查询</Button>
                                <Button type="primary" htmlType="button" onClick={onReset}>重置</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default AnjianFilter;
