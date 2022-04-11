import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Modal, Popconfirm, Row, Select, Space, Table} from "antd";
import api from '../../services'
import qs from  'qs'
import AnjianFilter from "./Anjian-Filter";

function Anjian(props) {
    const [ajList,setAjList]=useState([
        {text: 1, value: '刑事案件'},
        {text: 2, value: '民事案件'},
        {text: 3, value: '交通案件'},
    ]);
    const columns = [
        {
            title: '案件名称',
            dataIndex: 'ajName',
            // sorter: true,
            // render: name => `${name.first} ${name.last}`,
            width: '20%',
            align: 'center'
        },
        {
            title: '案件简介',
            dataIndex: 'ajDesc',
            // filters: [
            //     {text: '1111111111', value: '谁有集团'},
            //     {text: 'Female', value: 'female'},
            // ],
            width: '20%',
            align: 'center'
        },
        {
            title: '案件分类',
            dataIndex: 'ajType',
            width: '20%',
            render:(text)=>{
                return ajList.filter(e=>e.text===text).map(e=>e.value);
            },
            align: 'center'
        },
        {
            title: '分配人',
            dataIndex: 'assignUser',
            align: 'center'
        }
    ];
    const [page, setPage]=useState({pageNo:1,pageSize:10,total:0});
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);
    const paginationProp = {
        current: page.pageNo,
        total: page.total,
        pageSize: page.pageSize,
        showTotal: () => `共${page.total}条`
    }
    const [searchParam,setSearchParam]=useState({});


    const handleTableChange=(pagination)=>{
        const {current:pageNo,pageSize}=pagination;
        setPage({...page,...{pageNo,pageSize}})
    }
    useEffect(()=>{
        const fetchData=({pageNo=1,pageSize=10}={})=>{
            setLoading(true);
            api.get('/anjian/listV2?'+qs.stringify({...searchParam,...{pageNo,pageSize}}))
                .then(rsp=>{
                    const {records,current,size,total}=rsp.data.o;
                    setData(records);
                    page.total=total;
                    setLoading(false);
                })

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
        fetchData(page);
    },[page,searchParam])
    return (
        <div>
            <AnjianFilter page={page} searchParam={searchParam} setPage={setPage} setSearchParam={setSearchParam}/>
            <div style={{marginTop:'8px'}}>
                {loading}
                <Table
                    columns={columns}
                    rowKey={record => record.ajId}
                    dataSource={data}
                    pagination={paginationProp}
                    loading={loading}
                    onChange={handleTableChange}
                />

            </div>
        </div>
    );
}

export default Anjian;
