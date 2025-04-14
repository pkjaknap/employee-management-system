import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const fetchUsers = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://reqres.in/api/users?page=${pageNumber + 1}`
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      toast.error("Error fetching users");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchUsers(page);
  }, [page, token, navigate]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditDialog(true);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setUsers(users.filter((user) => user.id !== userId));
        toast.success("User deleted successfully");
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      toast.error("Error deleting user");
      console.error(error);
    }
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(
        `https://reqres.in/api/users/${selectedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: selectedUser.first_name,
            last_name: selectedUser.last_name,
            email: selectedUser.email,
          }),
        }
      );

      if (response.ok) {
        setUsers(
          users.map((user) =>
            user.id === selectedUser.id ? selectedUser : user
          )
        );
        toast.success("User updated successfully");
        setEditDialog(false);
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      toast.error("Error updating user");
      console.error(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("Logged out successfully");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Management
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Avatar
                      src={user.avatar}
                      alt={`${user.first_name} ${user.last_name}`}
                    />
                  </TableCell>
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.last_name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(user)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(user.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={totalPages * 6}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={6}
            rowsPerPageOptions={[6]}
          />
        </TableContainer>
      </Container>

      <Dialog open={editDialog} onClose={() => setEditDialog(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            fullWidth
            value={selectedUser?.first_name || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                first_name: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Last Name"
            fullWidth
            value={selectedUser?.last_name || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                last_name: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={selectedUser?.email || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                email: e.target.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Users;
