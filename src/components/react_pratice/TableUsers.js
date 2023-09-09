import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { fetchAllUser } from '../../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNewUser from './ModalAddNewUser';
import ModalEditUser from './ModalEditUser';
import _ from "lodash"

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [isshowEditModal, setShowEditModal] = useState(false);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

    const [dataUserEdit, setDataUserEdit] = useState({});

    const handleClose = () =>{
        setIsShowModalAddNew(false);
        setShowEditModal(false);
    }

    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    }

    useEffect(() => {
        getUsers(1);
    }, [])

    const handelShowEditModal = (user) => {
        // console.log(user);
        setDataUserEdit(user);
        setShowEditModal(true);
    }

    const getUsers = async(page) => {
        let res = await fetchAllUser(page);
        // console.log(res)
        if(res && res.data){
            setTotalUsers(res.total);
            setListUsers(res.data);
            // console.log(setTotalUsers);
            setTotalPages(res.total_pages);
        }
        // console.log(res);
    }
    // console.log(listUsers)
    const handlePageClick = (event) => {
        // console.log("=>", event);
        getUsers(+event.selected+1);
    }

    const handleEditUserFromModel = (user) => {
        let index = listUsers.findIndex(item => item.id === user.id)
        let cloneListUsers = _.cloneDeep(listUsers)
        cloneListUsers[index].first_name = user.first_name;
        setListUsers(cloneListUsers);
        setShowEditModal(false);
    }

    return (
    <>
        <div className='my-3 add-new'>
          <span><h3>List Users: </h3></span>
          <button className='btn btn-success' onClick={() => setIsShowModalAddNew(true)}>Add new user</button>
        </div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {listUsers && listUsers.length > 0 &&
        listUsers.map((item, index) => {
            return (
                <tr key={`users-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>
                        <button className='mx-3 btn btn-info' onClick={()=>handelShowEditModal(item)}>Edit</button>
                        <button className='mx-3 btn btn-danger'>Delete</button>
                    </td>
                </tr>
            )
        })
      }
      </tbody>
    </Table>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        subContainerClassName="pages pagination"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
    />
    <ModalAddNewUser show={isShowModalAddNew} handleClose={handleClose} handleUpdateTable={handleUpdateTable}></ModalAddNewUser>
    <ModalEditUser show={isshowEditModal} handleClose={handleClose} dataUserEdit={dataUserEdit} handleEditUserFromModel={handleEditUserFromModel}></ModalEditUser>
    </>
    );
};

export default TableUsers;