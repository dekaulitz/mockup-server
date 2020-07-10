package com.github.dekaulitz.mockyup.domain.users.models;

import com.github.dekaulitz.mockyup.domain.users.base.UserInterface;
import com.github.dekaulitz.mockyup.domain.users.vmodels.RegistrationVmodel;
import com.github.dekaulitz.mockyup.domain.users.vmodels.UpdateUserVmodel;
import com.github.dekaulitz.mockyup.infrastructure.configuration.security.AuthenticationProfileModel;
import com.github.dekaulitz.mockyup.infrastructure.db.entities.UserEntities;
import com.github.dekaulitz.mockyup.infrastructure.db.repositories.UserRepository;
import com.github.dekaulitz.mockyup.infrastructure.db.repositories.paging.UserEntitiesPage;
import com.github.dekaulitz.mockyup.infrastructure.errors.handlers.DuplicateDataEntry;
import com.github.dekaulitz.mockyup.infrastructure.errors.handlers.NotFoundException;
import com.github.dekaulitz.mockyup.utils.Hash;
import com.github.dekaulitz.mockyup.utils.ResponseCode;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserModel implements UserInterface {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final MongoTemplate mongoTemplate;


    public UserModel(UserRepository userRepository, MongoTemplate mongoTemplate) {
        this.userRepository = userRepository;
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public UserEntities addUser(RegistrationVmodel vmodel, AuthenticationProfileModel authenticationProfileModel) throws DuplicateDataEntry {
        boolean isExist = this.userRepository.existsByUsername(vmodel.getUsername());
        if (isExist) {
            throw new DuplicateDataEntry(ResponseCode.USER_ALREADY_EXIST);
        }
        UserEntities userEntities = new UserEntities();
        userEntities.setUsername(vmodel.getUsername());
        userEntities.setPassword(Hash.hashing(vmodel.getPassword()));
        userEntities.setAccessList(vmodel.getAccessList());
        userEntities.setUpdatedDate(new Date());
        return this.userRepository.save(userEntities);
    }

    @Override
    public void deleteUser(String userId, AuthenticationProfileModel authenticationProfileModel) throws DuplicateDataEntry {
        Optional<UserEntities> userEntities = this.userRepository.findById(userId);
        if (!userEntities.isPresent()) {
            throw new DuplicateDataEntry(ResponseCode.USER_NOT_FOUND);
        }

        this.userRepository.delete(userEntities.get());
    }


    @Override
    public UserEntitiesPage paging(Pageable pageable, String q) {
        UserEntitiesPage basePage = new UserEntitiesPage();
        basePage.setConnection(mongoTemplate);
        //add search query param
        basePage.addCriteria(q);
        //selected field
        basePage.getQuery().fields().include("_id").include("username").include("updatedDate");
        //add additional criteria or custom criteria
//        basePage.addAdditionalCriteria(Criteria.where("users").elemMatch(Criteria.where("userId").is("5ec41562b5a0ae5108a31c1d")));
        basePage.setPageable(pageable).build(UserEntities.class);
        return basePage;
    }

    @Override
    public List<UserEntities> listUsers(String username, AuthenticationProfileModel authenticationProfileModel) {
        Query query = new Query();
        query.addCriteria(Criteria.where("username").regex(".*" + username + ".*", "i"))
                .addCriteria(Criteria.where("id").ne(new ObjectId(authenticationProfileModel.get_id()))).limit(25);
        query.fields().include("id").include("username");
        return this.mongoTemplate.find(query, UserEntities.class);
    }

    @Override
    public UserEntities getUserById(String id) throws NotFoundException {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        query.fields().include("_id").include("username").include("accessList");
        UserEntities userEntities = this.mongoTemplate.findOne(query, UserEntities.class);
        if (userEntities == null)
            throw new NotFoundException(ResponseCode.USER_NOT_FOUND);
        return userEntities;
    }

    @Override
    public UserEntities updateUser(UpdateUserVmodel vmodel, String id) throws DuplicateDataEntry, NotFoundException {
        UserEntities userExist = this.userRepository.findFirstByUsername(vmodel.getUsername());
        if (userExist != null && !userExist.getId().equals(id)) {
            throw new DuplicateDataEntry("user already exist");
        }
        Optional<UserEntities> userEntities = this.userRepository.findById(id);
        if (!userEntities.isPresent()) throw new NotFoundException(ResponseCode.USER_NOT_FOUND);
        if (vmodel.getPassword().isEmpty()) vmodel.setPassword(userEntities.get().getPassword());
        else vmodel.setPassword(Hash.hashing(vmodel.getPassword()));
        UserEntities userEntitiesUpdate = UserEntities.builder()
                .username(vmodel.getUsername()).id(id)
                .password(vmodel.getPassword()).updatedDate(new Date())
                .accessList(vmodel.getAccessList()).build();
        return this.userRepository.save(userEntitiesUpdate);
    }

}
