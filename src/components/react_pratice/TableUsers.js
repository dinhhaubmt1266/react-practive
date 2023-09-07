import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { fetchAllUser } from '../../services/UserService';
import ReactPaginate from 'react-paginate';


const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getUsers(1);
    }, [])

    const getUsers = async(page) => {
        let res = await fetchAllUser(page);
        console.log(res)
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
        console.log("=>", event);
        getUsers(+event.selected+1);
    }
    return (
    <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
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
    </>
    );
};

export default TableUsers;