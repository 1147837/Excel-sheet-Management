import React from 'react';
import './ExcelSheetManager.css';

const ExcelSheetManager = () => {
  // Define links data
  const links = [
    { title: 'Work Record', url: 'https://docs.google.com/spreadsheets/d/1PgiM9o4Ty0cLnrnt_vNC4g4lyVyJ2ENdJkir5jn5xRA/edit#gid=0',image: 'https://st2.depositphotos.com/4520249/7735/v/450/depositphotos_77358830-stock-illustration-register-journal-record-icon.jpg' },
    { title: 'Project status', url: 'https://docs.google.com/spreadsheets/d/1jDpQ7QqbpKJLkcC5SQr82_vy7bNHlBDduwddiBcnCFU/edit#gid=0' ,image: 'https://freedesignfile.com/upload/2023/06/Project-status-icons-vector.jpg' },
    { title: 'Leads', url: 'https://docs.google.com/spreadsheets/d/1XqmeJl_F3FsK9if8SR1bwlavYK2A2NVfvlGgcu_CNlY/edit#gid=0',image: 'https://t4.ftcdn.net/jpg/04/75/66/39/360_F_475663996_ySAW0d6F806yhZNBj5yWMIczi4mvFopb.jpg'  },
    { title: 'Reels', url: 'https://docs.google.com/spreadsheets/d/1x7XESYtR9O7HKhxEZUx3-SnY4qI5vgd2eMzOHTK2uEg/edit#gid=0',image: 'https://thumbs.dreamstime.com/b/reels-logo-219165295.jpg' },
    { title: 'Inventory', url: 'https://docs.google.com/spreadsheets/d/15lgVhOZvRqfwKh3xbGzTWlsUmHhU6ZvN_KNpXfhZlC8/edit#gid=0',image: 'https://www.shutterstock.com/image-vector/inventory-control-icon-monochrome-simple-260nw-2355272773.jpg' },
    { title: 'Prabhu GYM Shoot', url: 'https://docs.google.com/spreadsheets/d/113rD86y-NrsywWUZT7b-ZqEO75tpOFPUt922gYQM76Y/edit#gid=0',image: 'https://static.vecteezy.com/system/resources/previews/038/043/755/non_2x/man-fitness-gym-shoot-the-wall-with-arrow-pictogram-icon-illustration-in-stamp-style-vector.jpg' },
    // { title: 'Leads', url: '',image: '' },
    // { title: 'Leads', url: '',image: '' },

    
  ];

  const handleLinkClick = (url) => {
    // Open link in new tab
    window.open(url, '_blank');
  };

  return (
    <div className="excel-sheet-manager">
      {/* Header Section */}
      <header>
      <img src="" alt="Company Logo" className="logo" />
        <h1>Smile Studios Management</h1>
        
      </header>
      {/* Main Content Section */}
      <div className="main-content">
        
        <div className="card-container">
          {/* Render cards */}
          {links.map((link, index) => (
            <div key={index} className="card" onClick={() => handleLinkClick(link.url)}>
              <img src={link.image} alt={`Icon for ${link.title}`} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{link.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <p>&copy; Team Smile Studios</p>
      </footer>
    </div>
  );

          }

export default ExcelSheetManager;
