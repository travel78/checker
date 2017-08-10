package com.shpyrna.dao;

import com.shpyrna.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Created by okten22 on 23.06.17.
 */
public interface UserDao extends JpaRepository<User,Integer> {

    User findByUsername(String username);

}
