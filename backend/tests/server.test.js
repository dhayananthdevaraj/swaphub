// const { getVehicleById, addVehicle, deleteVehicle, updateVehicle, getAllVehicles, getVehicleByUserId } = require("../controllers/vehicleController");
// const { getUserByUsernameAndPassword, getAllUsers, addUser } = require("../controllers/userController");
// const Vehicle = require("../models/vehicleModel");
// const User = require("../models/userModel");
// const { validateToken } = require('../authUtils');




// describe('getUserByUsernameAndPassword', () => {


//   test('getuserbyusernameandpassword_should_return_invalid_credentials_with_a_200_status_code', async () => {
//     // Sample user credentials
//     const userCredentials = {
//       email: 'nonexistent@example.com',
//       password: 'incorrect_password',
//     };

//     // Mock Express request and response objects
//     const req = {
//       body: userCredentials,
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the User.findOne method to resolve with null (user not found)
//     User.findOne = jest.fn().mockResolvedValue(null);

//     // Call the controller function
//     await getUserByUsernameAndPassword(req, res);

//     // Assertions
//     expect(User.findOne).toHaveBeenCalledWith(userCredentials);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Credentials' });
//   });

//   test('getuserbyusernameandpassword_should_handle_errors_and_respond_with_a_500_status_code_and_an_error_message', async () => {
//     // Mock an error to be thrown when calling User.findOne
//     const error = new Error('Database error');

//     // Sample user credentials
//     const userCredentials = {
//       email: 'john@example.com',
//       password: 'password123',
//     };

//     // Mock Express request and response objects
//     const req = {
//       body: userCredentials,
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the User.findOne method to reject with an error
//     User.findOne = jest.fn().mockRejectedValue(error);

//     // Call the controller function
//     await getUserByUsernameAndPassword(req, res);

//     // Assertions
//     expect(User.findOne).toHaveBeenCalledWith(userCredentials);
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });
// });

// describe('addUser', () => {
//   test('adduser_should_add_user_and_respond_with_a_200_status_code_and_success_message', async () => {
//     // Sample user data
//     const userData = {
//       username: 'john_doe',
//       email: 'john@example.com',
//       password: 'password123',
//     };

//     // Mock Express request and response objects
//     const req = {
//       body: userData,
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the User.create method to resolve with the sample user data
//     User.create = jest.fn().mockResolvedValue(userData);

//     // Call the controller function
//     await addUser(req, res);

//     // Assertions
//     expect(User.create).toHaveBeenCalledWith(userData);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Success' });
//   });

//   test('adduser_should_handle_errors_and_respond_with_a_500_status_code_and_an_error_message', async () => {
//     // Mock an error to be thrown when calling User.create
//     const error = new Error('Database error');

//     // Mock Express request and response objects
//     const req = {
//       body: {},
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the User.create method to reject with an error
//     User.create = jest.fn().mockRejectedValue(error);

//     // Call the controller function
//     await addUser(req, res);

//     // Assertions
//     expect(User.create).toHaveBeenCalledWith(req.body);
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });
// });
// describe('getAllUsers', () => {
//   test('getallusers_should_return_users_and_respond_with_a_200_status_code', async () => {
//     // Sample user data
//     const usersData = [
//       {
//         _id: 'user1',
//         username: 'john_doe',
//         email: 'john@example.com',
//         password: 'hashed_password1',
//       },
//       {
//         _id: 'user2',
//         username: 'jane_doe',
//         email: 'jane@example.com',
//         password: 'hashed_password2',
//       },
//     ];

//     // Mock Express request and response objects
//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the User.find method to resolve with the sample user data
//     User.find = jest.fn().mockResolvedValue(usersData);

//     // Call the controller function
//     await getAllUsers(req, res);

//     // Assertions
//     expect(User.find).toHaveBeenCalled();
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(usersData);
//   });

//   test('getallusers_should_handle_errors_and_respond_with_a_500_status_code_and_an_error_message', async () => {
//     // Mock an error to be thrown when calling User.find
//     const error = new Error('Database error');

//     // Mock Express request and response objects
//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the User.find method to reject with an error
//     User.find = jest.fn().mockRejectedValue(error);

//     // Call the controller function
//     await getAllUsers(req, res);

//     // Assertions
//     expect(User.find).toHaveBeenCalled();
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });
// });
// describe('getAllVehicle', () => {
//   test('getallvehicle_should_return_with_a_200_status_code', async () => {
//     // Sample vehicle data
//     const vehiclesData = [
//       {
//         _id: 'vehicle1',
//         vehicleName:'vehicle 1',
//         rentalPrice: 29.99,
//         category: 'Clothing',
//         description: 'vehicle 1 description',
//         imageUrl: 'https://example.com/vehicle1-image.jpg',
//         origin: 'vehicle 1 origin',
//         quantity: 5,
//         userId: 'user123',
//       },
//       {
//         _id: 'vehicle2',
//         vehicleName:'vehicle 2',
//         rentalPrice: 39.99,
//         category: 'Electronics',
//         description: 'vehicle 2 description',
//         imageUrl: 'https://example.com/vehicle2-image.jpg',
//         origin: 'vehicle 2 origin',
//         quantity: 10,
//         userId: 'user456',
//       },
//     ];

//     // Mock Express request and response objects
//     const req = {
//       body: { sortValue: 1, searchValue: '' },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.find method to resolve with the sample vehicle data
//     const vehicleQuery = {
//       sort: jest.fn().mockResolvedValue(vehiclesData), // Mocking the sort function
//       exec: jest.fn().mockResolvedValue(vehiclesData), // Mocking the exec function
//     };
//     Vehicle.find = jest.fn().mockReturnValue(vehicleQuery);

//     // Call the controller function
//     await getAllVehicles(req, res);

//     // Assertions
//     expect(res.status).toHaveBeenCalledWith(200);
//   });
//   test('getallvechiles_should_return_vehicles_and_respond_with_a_200_status_code', async () => {
//     // Sample vehicle data
//     const vehiclesData = [
//       {
//         _id: 'vehicle1',
//         vehicleName:'vehicle 1',
//         rentalPrice: 29.99,
//         category: 'Clothing',
//         description: 'vehicle 1 description',
//         imageUrl: 'https://example.com/vehicle1-image.jpg',
//         origin: 'vehicle 1 origin',
//         quantity: 5,
//         userId: 'user123',
//       },
//       {
//         _id: 'vehicle2',
//         vehicleName:'vehicle 2',
//         rentalPrice: 39.99,
//         category: 'Electronics',
//         description: 'vehicle 2 description',
//         imageUrl: 'https://example.com/vehicle2-image.jpg',
//         origin: 'vehicle 2 origin',
//         quantity: 10,
//         userId: 'user456',
//       },
//     ];

//     // Mock Express request and response objects
//     const req = {
//       body: { sortValue: 1, searchValue: '' },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.find method to resolve with the sample vehicle data
//     const vehicleQuery = {
//       sort: jest.fn().mockResolvedValue(vehiclesData), // Mocking the sort function
//       exec: jest.fn().mockResolvedValue(vehiclesData), // Mocking the exec function
//     };
//     Vehicle.find = jest.fn().mockReturnValue(vehicleQuery);

//     // Call the controller function
//     await getAllVehicles(req, res);

//     // Assertions
//     expect(Vehicle.find).toHaveBeenCalledWith({ vehicleName:new RegExp('', 'i') });
//     expect(vehicleQuery.sort).toHaveBeenCalledWith({ rentalPrice: 1 });
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(vehiclesData);
//   });
//   test('getallvehicles_should_handle_errors_and_respond_with_a_500_status_code_and_an_error_message', async () => {
//     // Mock an error to be thrown when calling Vehicle.find
//     const error = new Error('Database error');

//     // Mock Express request and response objects
//     const req = {
//       body: { sortValue: 1, searchValue: '' },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.find method to reject with an error
//     const vehicleQuery = {
//       sort: jest.fn().mockRejectedValue(error), // Mocking the sort function with error
//       exec: jest.fn().mockRejectedValue(error), // Mocking the exec function with error
//     };
//     Vehicle.find = jest.fn().mockReturnValue(vehicleQuery);

//     // Call the controller function
//     await getAllVehicles(req, res);

//     // Assertions
//     expect(Vehicle.find).toHaveBeenCalledWith({ vehicleName:new RegExp('', 'i') });
//     expect(vehicleQuery.sort).toHaveBeenCalledWith({ rentalPrice: 1 });
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });
// });
// describe('get_vehicle_by_user_id', () => {
//   test('get_vehicle_by_user_id_should_return_vehicles_for_a_valid_user_id_and_respond_with_a_200_status_code', async () => {
//     // Sample user ID and vehicle data
//     const userId = 'user123';
//     const vehiclesData = [
//       {
//         _id: 'vehicle1',
//         vehicleName:'vehicle 1',
//         rentalPrice: 29.99,
//         category: 'Clothing',
//         description: 'vehicle 1 description',
//         imageUrl: 'https://example.com/vehicle1-image.jpg',
//         origin: 'vehicle 1 origin',
//         quantity: 5,
//         userId: 'user123',
//       },
//       {
//         _id: 'vehicle2',
//         vehicleName:'vehicle 2',
//         rentalPrice: 39.99,
//         category: 'Electronics',
//         description: 'vehicle 2 description',
//         imageUrl: 'https://example.com/vehicle2-image.jpg',
//         origin: 'vehicle 2 origin',
//         quantity: 10,
//         userId: 'user123',
//       },
//     ];

//     // Mock Express request and response objects
//     const req = {
//       body: { userId, sortValue: 1, searchValue: '' },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.find method to resolve with a query
//     const vehicleQuery = {
//       sort: jest.fn().mockResolvedValue(vehiclesData), // Mocking the sort function
//     };
//     Vehicle.find = jest.fn().mockReturnValue(vehicleQuery);

//     // Call the controller function
//     await getVehicleByUserId(req, res);

//     // Assertions
//     expect(Vehicle.find).toHaveBeenCalledWith({ userId: 'user123', vehicleName:new RegExp('', 'i') });
//     expect(vehicleQuery.sort).toHaveBeenCalledWith({ rentalPrice: 1 });
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(vehiclesData);
//   });

//   test('get_vehicle_by_user_id_should_handle_errors_and_respond_with_a_500_status_code_and_an_error_message', async () => {
//     // Mock an error to be thrown when calling Vehicle.find
//     const error = new Error('Database error');

//     // Mock Express request and response objects
//     const req = {
//       body: { userId: 'user123', sortValue: 1, searchValue: '' },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.find method to resolve with a query
//     const vehicleQuery = {
//       sort: jest.fn().mockRejectedValue(error), // Mocking the sort function with error
//     };
//     Vehicle.find = jest.fn().mockReturnValue(vehicleQuery);

//     // Call the controller function
//     await getVehicleByUserId(req, res);

//     // Assertions
//     expect(Vehicle.find).toHaveBeenCalledWith({ userId: 'user123', vehicleName:new RegExp('', 'i') });
//     expect(vehicleQuery.sort).toHaveBeenCalledWith({ rentalPrice: 1 });
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });
// });
// describe('deleteVehicle', () => {
//   test('delete_vehicle_should_delete_a_vehicle_and_respond_with_a_200_status_code_and_success_message', async () => {
//     // Sample vehicle ID to be deleted
//     const vehicleId = 'vehicle123';

//     // Mock Express request and response objects
//     const req = { params: { id: vehicleId } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.findByIdAndDelete method to resolve with the deleted vehicle data
//     Vehicle.findByIdAndDelete = jest.fn().mockResolvedValue({
//       _id: vehicleId,
//       vehicleName:'Deleted vehicle',
//       // Include other fields as needed
//     });

//     // Call the controller function
//     await deleteVehicle(req, res);

//     // Assertions
//     expect(Vehicle.findByIdAndDelete).toHaveBeenCalledWith(vehicleId);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Vehicle deleted successfully' });
//   });

//   test('delete_vehicle_should_handle_not_finding_a_vehicle_and_respond_with_a_404_status_code', async () => {
//     // Mock Express request and response objects
//     const req = { params: { id: 'nonExistentvehicle' } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.findByIdAndDelete method to resolve with null (vehicle not found)
//     Vehicle.findByIdAndDelete = jest.fn().mockResolvedValue(null);

//     // Call the controller function
//     await deleteVehicle(req, res);

//     // Assertions
//     expect(Vehicle.findByIdAndDelete).toHaveBeenCalledWith('nonExistentvehicle');
//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Cannot find any vehicle' });
//   });

//   test('delete_vehicle_should_handle_errors_and_respond_with_a_500_status_code_and_an_error_message', async () => {
//     // Mock an error to be thrown when calling Vehicle.findByIdAndDelete
//     const error = new Error('Database error');

//     // Mock Express request and response objects
//     const req = { params: { id: 'vehicle123' } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.findByIdAndDelete method to reject with an error
//     Vehicle.findByIdAndDelete = jest.fn().mockRejectedValue(error);

//     // Call the controller function
//     await deleteVehicle(req, res);

//     // Assertions
//     expect(Vehicle.findByIdAndDelete).toHaveBeenCalledWith('vehicle123');
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });
// });

// describe('updateVehicle', () => {
//   test('update_vehicle_should_update_a_vehicle_and_respond_with_a_200_status_code_and_success_message', async () => {
//     // Sample vehicle ID and updated vehicle data
//     const vehicleId = 'vehicle123';
//     const updatedvehicleData = {
//       vehicleName:'Updated vehicle',
//       rentalPrice: 39.99,
//       category: 'Electronics',
//       description: 'Updated vehicle description',
//       imageUrl: 'https://example.com/updated-vehicle-image.jpg',
//       origin: 'Updated origin',
//       quantity: 15,
//       userId: 'user789',
//     };

//     // Mock Express request and response objects
//     const req = { params: { id: vehicleId }, body: updatedvehicleData };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.findByIdAndUpdate method to resolve with the updated vehicle data
//     Vehicle.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedvehicleData);

//     // Call the controller function
//     await updateVehicle(req, res);

//     // Assertions
//     expect(Vehicle.findByIdAndUpdate).toHaveBeenCalledWith(vehicleId, updatedvehicleData, { new: true });
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Vehicle updated successfully' });
//   });

//   test('update_vehicle_should_handle_not_finding_a_vehicle_and_respond_with_a_404_status_code', async () => {
//     // Mock Express request and response objects
//     const req = { params: { id: 'nonExistentvehicle' }, body: {} };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.findByIdAndUpdate method to resolve with null (vehicle not found)
//     Vehicle.findByIdAndUpdate = jest.fn().mockResolvedValue(null);

//     // Call the controller function
//     await updateVehicle(req, res);

//     // Assertions
//     expect(Vehicle.findByIdAndUpdate).toHaveBeenCalledWith('nonExistentvehicle', {}, { new: true });
//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Cannot find any vehicle' });
//   });

//   test('update_vehicle_should_handle_errors_and_respond_with_a_500_status_code_and_an_error_message', async () => {
//     // Mock an error to be thrown when calling Vehicle.findByIdAndUpdate
//     const error = new Error('Database error');

//     // Mock Express request and response objects
//     const req = { params: { id: 'vehicle123' }, body: {} };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock the Vehicle.findByIdAndUpdate method to reject with an error
//     Vehicle.findByIdAndUpdate = jest.fn().mockRejectedValue(error);

//     // Call the controller function
//     await updateVehicle(req, res);

//     // Assertions
//     expect(Vehicle.findByIdAndUpdate).toHaveBeenCalledWith('vehicle123', {}, { new: true });
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });
// });
// describe('getVehicleById', () => {
//   test('get_vehicle_by_id_should_return_a_vehicle_with_a_200_status_code', async () => {
//     // Sample vehicle ID and corresponding vehicle
//     const vehicleId = 'vehicle123';
//     const vehicleData = {
//       _id: vehicleId,
//       vehicleName:'Sample vehicle',
//       rentalPrice: 50.99,
//       category: 'Electronics',
//       description: 'Sample vehicle description',
//       imageUrl: 'https://example.com/sample-image.jpg',
//       origin: 'Sample origin',
//       quantity: 10,
//       userId: 'user123',
//     };

//     // Mock the Vehicle.findById method to resolve with the sample vehicle
//     Vehicle.findById = jest.fn().mockResolvedValue(vehicleData);

//     // Mock Express request and response objects
//     const req = { params: { id: vehicleId } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Call the controller function
//     await getVehicleById(req, res);

//     // Assertions
//     expect(Vehicle.findById).toHaveBeenCalledWith(vehicleId);
//     expect(res.status).toHaveBeenCalledWith(200);
//   });
//   test('get_vehicle_by_id_should_return_a_vehicle_with_a_exact_response_object', async () => {
//     // Sample vehicle ID and corresponding vehicle
//     const vehicleId = 'vehicle123';
//     const vehicleData = {
//       _id: vehicleId,
//       vehicleName:'Sample vehicle',
//       rentalPrice: 50.99,
//       category: 'Electronics',
//       description: 'Sample vehicle description',
//       imageUrl: 'https://example.com/sample-image.jpg',
//       origin: 'Sample origin',
//       quantity: 10,
//       userId: 'user123',
//     };

//     // Mock the Vehicle.findById method to resolve with the sample vehicle
//     Vehicle.findById = jest.fn().mockResolvedValue(vehicleData);

//     // Mock Express request and response objects
//     const req = { params: { id: vehicleId } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Call the controller function
//     await getVehicleById(req, res);

//     // Assertions
//     expect(Vehicle.findById).toHaveBeenCalledWith(vehicleId);
//     expect(res.json).toHaveBeenCalledWith(vehicleData);
//   });
//   test('get_vehicle_by_id_should_return_vehicle_not_found_with_a_200_status_code', async () => {
//     // Mock Express request and response objects
//     const req = { params: { id: 'nonExistentvehicle' } };

//     // Mock the Vehicle.findById method to resolve with null (vehicle not found)
//     Vehicle.findById = jest.fn().mockResolvedValue(null);

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Call the controller function
//     await getVehicleById(req, res);

//     // Assertions
//     expect(Vehicle.findById).toHaveBeenCalledWith('nonExistentvehicle');
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Cannot find any vehicle' });
//   });

//   test('get_vehicle_by_id_should_handle_errors_and_respond_with_a_500_status_code_and_an_error_message', async () => {
//     // Mock an error to be thrown when calling Vehicle.findById
//     const error = new Error('Database error');

//     // Mock Express request and response objects
//     const req = { params: { id: 'vehicle123' } };

//     // Mock the Vehicle.findById method to reject with an error
//     Vehicle.findById = jest.fn().mockRejectedValue(error);

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Call the controller function
//     await getVehicleById(req, res);

//     // Assertions
//     expect(Vehicle.findById).toHaveBeenCalledWith('vehicle123');
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });

// });
// describe('addVehicle', () => {
//   test('add_vehicle_should_add_a_vehicle_and_respond_with_a_200_status_code_and_success_message', async () => {
//     // Sample vehicle data to be added
//     const vehicleToAdd = {
//       vehicleName:'New vehicle',
//       rentalPrice: 29.99,
//       category: 'Clothing',
//       description: 'New vehicle description',
//       imageUrl: 'https://example.com/new-vehicle-image.jpg',
//       origin: 'New origin',
//       quantity: 5,
//       userId: 'user456',
//     };

//     // Mock the Vehicle.create method to resolve successfully
//     Vehicle.create = jest.fn().mockResolvedValue(vehicleToAdd);

//     // Mock Express request and response objects
//     const req = { body: vehicleToAdd };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Call the controller function
//     await addVehicle(req, res);

//     // Assertions
//     expect(Vehicle.create).toHaveBeenCalledWith(vehicleToAdd);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Vehicle added successfully' });
//   });

//   test('add_vehicle_should_handle_errors_and_respond_with_a_500_status_code_and_an_error_message', async () => {
//     // Mock an error to be thrown when calling Vehicle.create
//     const error = new Error('Database error');

//     // Mock the Vehicle.create method to reject with an error
//     Vehicle.create = jest.fn().mockRejectedValue(error);

//     // Mock Express request and response objects
//     const req = { body: {} };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Call the controller function
//     await addVehicle(req, res);

//     // Assertions
//     expect(Vehicle.create).toHaveBeenCalledWith(req.body);
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });
// });
// describe('User Model Schema Validation', () => {
//   test('should_validate_a_user_with_valid_data', async () => {
//     const validUserData = {
//       firstName: 'John',
//       lastName: 'Doe',
//       mobileNumber: '1234567890',
//       email: 'john.doe@example.com',
//       role: 'user',
//       password: 'validpassword',
//     };

//     const user = new User(validUserData);

//     // Validate the user data against the schema
//     await expect(user.validate()).resolves.toBeUndefined();
//   });

//   test('should_validate_a_user_with_missing_required_fields', async () => {
//     const invalidUserData = {
//       // Missing required fields
//     };

//     const user = new User(invalidUserData);

//     // Validate the user data against the schema
//     await expect(user.validate()).rejects.toThrowError();
//   });

//   test('should_validate_a_user_with_invalid_mobile_number_format', async () => {
//     const invalidUserData = {
//       firstName: 'John',
//       lastName: 'Doe',
//       mobileNumber: 'not-a-number',
//       email: 'john.doe@example.com',
//       role: 'user',
//       password: 'validpassword',
//     };

//     const user = new User(invalidUserData);

//     // Validate the user data against the schema
//     await expect(user.validate()).rejects.toThrowError(/is not a valid mobile number/);
//   });

//   test('should_validate_a_user_with_invalid_email_format', async () => {
//     const invalidUserData = {
//       firstName: 'John',
//       lastName: 'Doe',
//       mobileNumber: '1234567890',
//       email: 'invalid-email',
//       role: 'user',
//       password: 'validpassword',
//     };

//     const user = new User(invalidUserData);

//     // Validate the user data against the schema
//     await expect(user.validate()).rejects.toThrowError(/is not a valid email address/);
//   });

//   test('should_validate_a_user_with_a_password_shorter_than_the_minimum_length', async () => {
//     const invalidUserData = {
//       firstName: 'John',
//       lastName: 'Doe',
//       mobileNumber: '1234567890',
//       email: 'john.doe@example.com',
//       role: 'user',
//       password: 'short',
//     };

//     const user = new User(invalidUserData);

//     // Validate the user data against the schema
//     await expect(user.validate()).rejects.toThrowError(/is shorter than the minimum allowed length/);
//   });

//   test('should_validate_a_user_with_a password_longer_than_the_maximum_length', async () => {
//     const invalidUserData = {
//       firstName: 'John',
//       lastName: 'Doe',
//       mobileNumber: '1234567890',
//       email: 'john.doe@example.com',
//       role: 'user',
//       password: 'a'.repeat(256),
//     };

//     const user = new User(invalidUserData);

//     // Validate the user data against the schema
//     await expect(user.validate()).rejects.toThrowError(/is longer than the maximum allowed length /);
//   });
// });
// describe("schema validation for vehicle",()=>{
//   test('should_validate_a_vehicle_with_a_negative_price', async () => {
//     const invalidvehicleData = {
//       vehicleName:'Sample vehicle',
//       rentalPrice: -10,
//       description: 'This is a sample vehicle description.',
//       imageUrl: 'https://example.com/sample-image.jpg',
//       category: 'Electronics',
//       origin: 'Sample Origin',
//       quantity: 10,
//       userId: 'user123',
//     };
  
//     let a=new Vehicle(invalidvehicleData);
  
//     // Validate the vehicle data against the schema
//     await expect(a.validate()).rejects.toThrowError(/is less than minimum allowed value/);
//   });

// })

// describe('validateToken', () => {
 
//   test('should_respond_with_400_status_and_error_message_if_invalid_token_is_provided', () => {
//     // Mock the req, res, and next objects
//     const req = {
//       header: jest.fn().mockReturnValue('invalidToken'),
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//     const next = jest.fn();

//     // Call the validateToken function
//     validateToken(req, res, next);

//     // Assertions
//     expect(req.header).toHaveBeenCalledWith('Authorization');
//     expect(next).not.toHaveBeenCalled();
//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Authentication failed' });
//   });

//   test('should_respond_with_400_status_and_error_message_if_no_token_is_provided', () => {
//     // Mock the req, res, and next objects
//     const req = {
//       header: jest.fn().mockReturnValue(null),
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//     const next = jest.fn();

//     // Call the validateToken function
//     validateToken(req, res, next);

//     // Assertions
//     expect(req.header).toHaveBeenCalledWith('Authorization');
//     expect(next).not.toHaveBeenCalled();
//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Authentication failed' });
//   });
// });

// const http = require('http');

// const serverURL = 'http://localhost:8080'; // Replace with your actual server URL
// const endpointPath = '/user/signup'; // Replace with your actual endpoint path

// test('Check Endpoint Existence', (done) => {
//   const options = {
//     method: 'POST', // Use HEAD request to check only the existence of the endpoint
//   };

//   const req = http.request(`${serverURL}${endpointPath}`, options, (res) => {
//     try {
//       expect(res.statusCode).toBe(200);
//       console.log('Endpoint exists!');
//       done();
//     } catch (error) {
//       done(`Endpoint does not exist. Error: ${error.message}`);
//     }
//   });

//   req.on('error', (error) => {
//     done(`Error making request: ${error.message}`);
//   });

//   req.end();
// });


// const http = require('http');

// const serverURL = 'http://localhost:8080'; // Replace with your actual server URL
// const endpointPath = '/user/signup'; // Replace with your actual endpoint path
// const generateUniqueEmail = () => {
//   const timestamp = new Date().getTime();
//   return `user_${timestamp}@example.com`;
// };

// const uniqueEmail = generateUniqueEmail();
// const requestBody = JSON.stringify({
//   // Your request body data here
//   firstName: 'John',
//   lastName: 'Doe',
//   mobileNumber: '1234567890',
//   email: uniqueEmail,
//   role: 'user',
//   password: 'securepassword',
// });

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': Buffer.byteLength(requestBody),
//   },
// };

// const req = http.request(`${serverURL}${endpointPath}`, options, (res) => {
//   let data = '';

//   res.on('data', (chunk) => {
//     data += chunk;
//   });

//   res.on('end', () => {
//     try {
//       expect(res.statusCode).toBe(200);
//       console.log('Endpoint exists!');
//       console.log('Response body:', data);
//     } catch (error) {
//       console.error(`Endpoint does not exist. Error: ${error.message}`);
//     }
//   });
// });

// req.on('error', (error) => {
//   console.error(`Error making request: ${error.message}`);
// });

// // Send the request body
// req.write(requestBody);

// // Complete the request
// req.end();





// const http = require('http');

// const serverURL = 'http://localhost:8080'; // Replace with your actual server URL

// const endpoints = [
//   { path: '/user/login', method: 'POST' },
//   { path: '/user/signup', method: 'GET' },
//   { path: '/user/getAllUsers', method: 'GET' },
//   // Add more endpoints as needed
// ];

// // Construct a loop to check multiple endpoints
// endpoints.forEach(({ path, method }) => {
//   test(`Check ${method} Endpoint Existence for ${path}`, (done) => {
//     const options = {
//       method,
//     };

//     const req = http.request(`${serverURL}${path}`, options, (res) => {
//       try {
//         expect(res.statusCode).toBe(200);
//         console.log(`${method} ${path} exists!`);
//         done();
//       } catch (error) {
//         done(`Endpoint ${method} ${path} does not exist. Error: ${error.message}`);
//       }
//     });

//     req.on('error', (error) => {
//       done(`Error making request: ${error.message}`);
//     });

//     req.end();
//   });
// });
// const http = require('http');

// const serverURL = 'http://localhost:8080'; // Replace with your actual server URL
// const endpointPath = '/user/login'; // Replace with your actual endpoint path

// // Function to generate a unique email using a timestamp
// const generateUniqueEmail = () => {
//   const timestamp = new Date().getTime();
//   return `user_${timestamp}@example.com`;
// };

// test('Check Endpoint Existence', (done) => {
//   const options = {
//     method: 'POST', // Use HEAD request to check only the existence of the endpoint
//   };

//   const req = http.request(`${serverURL}${endpointPath}`, options, (res) => {
//     try {
//       expect(res.statusCode).toBe(200);
//       console.log('Endpoint exists!');
//       done();
//     } catch (error) {
//       done(`Endpoint does not exist. Error: ${error.message}`);
//     }
//   });

//   req.on('error', (error) => {
//     done(`Error making request: ${error.message}`);
//   });

//   req.end();
// });


// test('Check Endpoint Existence', (done) => {
//   const options = {
//     method: 'POST', // Use HEAD request to check only the existence of the endpoint
//   };

//   const req = http.request(`${serverURL}${endpointPath}`, options, (res) => {
//     try {
//       expect(res.statusCode).toBe(200);
//       console.log('Endpoint exists!');
//       done();
//     } catch (error) {
//       done(`Endpoint does not exist. Error: ${error.message}`);
//     }
//   });

//   req.on('error', (error) => {
//     done(`Error making request: ${error.message}`);
//   });

//   req.end();
// });


// const http = require('http');

// const serverURL = 'http://localhost:8080'; // Replace with your actual server URL
// const endpointPath = '/user/sasdfisgnup'; // Replace with your actual endpoint path

// // Function to generate a unique email using a timestamp
// const generateUniqueEmail = () => {
//   const timestamp = new Date().getTime();
//   return `user_${timestamp}@example.com`;
// };

// const uniqueEmail = generateUniqueEmail();

// const validRequestBody = JSON.stringify({
//   // Your valid request body data here
//   firstName: 'John',
//   lastName: 'Doe',
//   mobileNumber: '1234567890',
//   email: uniqueEmail,
//   role: 'user',
//   password: 'securepassword',
// });

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': Buffer.byteLength(validRequestBody),
//   },
// };


// const http = require('http');

// const serverURL = 'http://localhost:8080'; // Replace with your actual server URL
// const endpointPath = '/user/login'; // Replace with your actual endpoint path

// test('Check Endpoint Existence', (done) => {
//   const options = {
//     method: 'POST', // Use HEAD request to check only the existence of the endpoint
//   };

//   const req = http.request(`${serverURL}${endpointPath}`, options, (res) => {
//     try {
//       expect(res.statusCode).toBe(200);
//       console.log('Endpoint exists!');
//       done();
//     } catch (error) {
//       done(`Endpoint does not exist. Error: ${error.message}`);
//     }
//   });

//   req.on('error', (error) => {
//     done(`Error making request: ${error.message}`);
//   });

//   req.end();
// });



const http = require('http');


const generateUniqueEmail = () => {
  const timestamp = new Date().getTime();
  return `user_${timestamp}@example.com`;
};

const uniqueEmail = generateUniqueEmail();

const validRequestBody = JSON.stringify({
  // Your valid request body data here
  firstName: 'John',
  lastName: 'Doe',
  mobileNumber: '1234567890',
  email: uniqueEmail,
  role: 'user',
  password: 'securepassword',
});




const serverURL = 'http://localhost:8080'; // Replace with your actual server URL
const endpointPath = '/user/getAllUssers'; // Replace with your actual endpoint path

// const validRequestBody = JSON.stringify({
//   // Your valid request body data here
//   username: 'yourUsername',
//   password: 'yourPassword',
// });

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Length': Buffer.byteLength(validRequestBody),
  },
};

test('Check Endpoint Existence', (done) => {
  const req = http.request(`${serverURL}${endpointPath}`, options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        expect(res.statusCode).toBe(200);
        done();
      } catch (error) {
        done(`Endpoint does not exist. Error: ${error.message}`);
      }
    });
  });

  req.on('error', (error) => {
    done(`Error making request: ${error.message}`);
  });

  // Send the valid request body
  // req.write(validRequestBody);

  // Complete the request
  req.end();
});
