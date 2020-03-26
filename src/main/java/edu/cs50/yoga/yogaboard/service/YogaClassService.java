package edu.cs50.yoga.yogaboard.service;

import edu.cs50.yoga.yogaboard.model.YogaClass;
import edu.cs50.yoga.yogaboard.repository.YogaClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YogaClassService {

    @Autowired
    private YogaClassRepository yogaClassRepository;

    public List<YogaClass> getClasses() {
        return yogaClassRepository.findAll();
    }

    public YogaClass createClass(YogaClass yogaClass) {
        YogaClass yc = new YogaClass();
        yc.setName(yogaClass.getName());
        yc.setType(yogaClass.getType());
        yc.setDescription(yogaClass.getDescription());
        yc.setTeacher(yogaClass.getTeacher());
        yc.setLocation(yogaClass.getLocation());
        yc.setDate(yogaClass.getDate());
        return yogaClassRepository.save(yc);
    }

    public YogaClass getSingleClass(String id) {
        return yogaClassRepository.findById(id).orElse(null);
    }
}
